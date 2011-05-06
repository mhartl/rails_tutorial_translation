class ChaptersController < ApplicationController

  def show
    chapter = params[:id]
    @content = File.open("public/3.0/#{chapter}_fragment.html").read
  end
end
