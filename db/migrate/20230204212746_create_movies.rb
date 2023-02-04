class CreateMovies < ActiveRecord::Migration[7.0]
  def change
    create_table :movies do |t|
      t.string :title
      t.integer :year
      t.string :director
      t.string :actors
      t.string :genre
      t.float :rating
      t.boolean :viewed

      t.timestamps
    end
  end
end
