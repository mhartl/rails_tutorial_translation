class ChaptersController < ApplicationController

  def show
    chapter = params[:id]
    @content = File.open("public/book/#{chapter}_fragment.html").read
  end
end
