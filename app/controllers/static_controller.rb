class StaticController < ApplicationController
    def home
        render json: {status: "I work"}
    end
end