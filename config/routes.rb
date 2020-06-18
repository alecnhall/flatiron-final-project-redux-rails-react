Rails.application.routes.draw do
  resources :artists, only: [:index, :show, :create]
  resources :albums, only: [:index, :show, :create]
  resources :sessions, only: [:create]
  resources :registrations, only: [:create]
  delete :logout, to: "sessions#logout"
  get :logged_in, to: "sessions#logged_in"
  root to: "static#home"
end
