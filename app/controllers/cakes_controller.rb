class CakesController < ApplicationController
  before_action :require_user, only: [:new, :create, :destroy]
  
  def index
    @categories = Category.all
    @cakes = Category.find(params[:category_id]).cakes
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
  
  def destroy
    cake = Cake.find(params[:id])
    cake.destroy
    redirect_to gallery_path
  end
  
  private
  def cake_params
    params.require(:cake).permit(:cake, :category_id)
  end
end
