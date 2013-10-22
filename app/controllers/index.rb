get '/' do
  erb :index
end


post '/' do
  @tweet = params[:tweet]
  Twitter.update(@tweet)

  erb :index
end
