class NoteController < ApplicationController
     before_action :require_logged_in
     def create
       @note = current_user.note.new(note_params)

        if @note.save
            render :show
        else
            render json: @note, status: :unprocessable_entity
        end

        def note_params
            params.require(:note).permit(:title, :body, :notebook_id)
        end
  end
end
