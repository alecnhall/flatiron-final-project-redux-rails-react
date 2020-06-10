if Rails.env == "production"
    Rails.application.config.session_store :cookie_store, key: "_redux_app", domain: "redux-final-project.herokuapp.com"
else
    Rails.application.config.session_store :cookie_store, key: "_redux_app"
end