class CakesController < ApplicationController
  before_action :require_user
  
  def new
    @cake = Cake.new
  end
  
  def create
    @cake = Cake.new(cake_params)
    
    if @cake.save
      redirect_to root_path 
    else
      render :new
    end
  end
  
  private
  def cake_params
    params.require(:cake).permit(:cake)
  end
end
