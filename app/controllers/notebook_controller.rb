class NotebookController < ApplicationController
    before_action :require_logged_in
     def create
       @notebook = current_user.notebook.new(notebook_params)

        if @note.save
            render :show
        else
            render json: @notebook, status: :unprocessable_entity
        end

        def note_params
            params.require(:notebook).permit(:title, :user_id)
        end
  end
end
