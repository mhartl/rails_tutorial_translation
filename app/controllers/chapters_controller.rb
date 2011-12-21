class ChaptersController < ApplicationController

  before_filter :heroku_cache

  def show
    chapter = params[:id]
    @content = File.open("public/book/#{chapter}_fragment.html").read
    @chapter = chapter
  end
end
