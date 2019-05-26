# TODO.rb
require 'sinatra'
require 'ohm'
require 'slim'
#require 'pry'

class TODO < Sinatra::Base
  configure do
    set :views, ['./views/layouts', './views/partials']
  end

  def find_template(views, name, engine, &block)
    Array(views).each do |v|
	  super(v, name, engine, &block)
	end
  end

  Thread.new {
    system("./redis-server")
  }
  
  Dir["./models/*.rb"].each { |file| require file }
  require_relative './routes/app'

  # start the server if ruby file executed directly
  run! if app_file == $0
end
