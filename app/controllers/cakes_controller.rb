class CakesController < ApplicationController
  before_action :require_user, only: [:new, :create]
  
  def index
    @cakes = Cake.all
  end
  
  def new
    @cake = Cake.new
  end
  
  def create
    @cake = Cake.new(cake_params)
    
    if @cake.save
      redirect_to gallery_path 
    else
      render :new
    end
  end
  
  private
  def cake_params
    params.require(:cake).permit(:cake)
  end
end
