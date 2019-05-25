class TODO < Sinatra::Base
  get '/' do

    #binding.pry
    #Task.all.ids.each do |id|
    #  Task.redis.call("HDEL", Task.key[id], "true")
    #end

    @tasks = Task.all.to_a
    slim :index, layout: :application
    #binding.pry
    #erb :application
  end

  get '/new' do
    slim :new, layout: :application
  end
  post '/add' do
	  Task.create(params[:task].merge(:time => Time.now).merge(:done => :false))
    #redirect back
    redirect to('/')
  end

  post '/delete/:id' do
    Task[params[:id]].delete
    redirect to('/')
  end

  post '/edit/:id/:checked' do
    Task[params[:id]].update(:done => params[:checked])
  end

  not_found do
    'This is nowhere to be found.'
  end
end
