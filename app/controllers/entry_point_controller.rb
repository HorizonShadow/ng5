class EntryPointController < ApplicationController
  def index
    render component: :App, prerender: true, class: 'full'
  end
end
