class Api::EventsController < ApplicationController
  before_action :set_api_event, only: [:show, :update, :destroy]

  # GET /api/events
  # GET /api/events.json
  def index
    @api_events = Api::Event.all
  end

  # GET /api/events/1
  # GET /api/events/1.json
  def show
  end

  # POST /api/events
  # POST /api/events.json
  def create
    @api_event = Api::Event.new(api_event_params)

    if @api_event.save
      render :show, status: :created, location: @api_event
    else
      render json: @api_event.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/events/1
  # PATCH/PUT /api/events/1.json
  def update
    if @api_event.update(api_event_params)
      render :show, status: :ok, location: @api_event
    else
      render json: @api_event.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/events/1
  # DELETE /api/events/1.json
  def destroy
    @api_event.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_event
      @api_event = Api::Event.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def api_event_params
      params.require(:api_event).permit(:name)
    end
end
