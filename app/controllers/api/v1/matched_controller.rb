class Api::V1::MatchedController < ApiController
  before_action :authenticate_user, only: [:index]
  skip_before_action :verify_authenticity_token

  def index
    render json: current_user
  end
end