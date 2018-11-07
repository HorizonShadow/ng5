class EntryPointController < ApplicationController
  def index
    render component: :App, prerender: false, class: 'full'
  end
end
