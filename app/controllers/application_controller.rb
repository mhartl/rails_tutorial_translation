class ApplicationController < ActionController::Base
  protect_from_forgery

  private

    # Use the Heroku Varnish cache.
    def heroku_cache
      if Rails.env.production?
        age = 1.day.to_i
        response.headers['Cache-Control'] = "public, max-age=#{age}"
      end
    end

end
