Rails.application.routes.draw do
  root 'pages#home'
  get '/about', to: 'pages#about'
  get '/contact', to: 'pages#contact'
  get '/order', to: 'pages#order'
  get '/admin', to: 'sessions#new'
  post '/sign_in', to: 'sessions#create'
  get '/sign_out', to: 'sessions#destroy'
  resources :cakes, only: [:create, :new]
end
