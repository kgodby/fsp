Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create] do
      resources :notebooks, except: [:new, :edit]
      resources :notes, except: [:new, :edit]
    end
  end
  root "static_pages#root"  
end
