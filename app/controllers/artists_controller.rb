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
      name: params["artist"]["name"],
      img: params["artist"]["img"],
      source_link: params["artist"]["source_link"]
    )

    if artist 
      render json: {
        status: :created,
      }
    else 
      render json: { status: 500}
    end
  end

end
