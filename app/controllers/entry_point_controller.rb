class EntryPointController < ApplicationController
  def index
    render(component: :StaticRoutes, props: { path: request.path, csrf: form_authenticity_token }, prerender: true, class: 'full')
  end
end
