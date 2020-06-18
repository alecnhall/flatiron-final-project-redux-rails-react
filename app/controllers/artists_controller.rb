class ArtistsController < ApplicationController
  def index
    if params[:user_id]
      artists = User.find(params[:user_id]).artists
      render json: artists
    else 
      artists = Artist.all
      render json: artists 
    end
  end

  def create
    artist = Artist.create!(
      name: params["name"],
      img: params["img"],
      source_link: params["source_link"],
      user_id: params["user_id"]
    )

    if artist 
      render json: {
        status: :created,
        artist: artist
      }
    else 
      render json: { status: 500}
    end
  end

end
