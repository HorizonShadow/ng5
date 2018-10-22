Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
  post "/graphql", to: "graphql#execute"
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  namespace :admin do
    get 'events/index'
  end
  namespace :api do
    resources :events
  end
  root to: 'entry_point#index'
  get '*path', to: 'entry_point#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
