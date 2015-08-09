class Bike
	def initialize(max_pedal_gear, min_pedal_gear, max_wheel_gear, min_wheel_gear)
		@max_pedal_gear = max_pedal_gear
		@min_pedal_gear = min_pedal_gear
		@max_wheel_gear = max_wheel_gear
		@min_wheel_gear = min_wheel_gear

		@pedal_gear = @max_pedal_gear/2
		@wheel_gear = @max_wheel_gear/2
		@gear_ratio = @pedal_gear.to_f/@wheel_gear.to_f

		@units_travelled = 0
	end

	def shift_pedal(direction)
		if direction == "up"
			@pedal_gear == @max_pedal_gear ? (puts "Pedal gear is already maxed") : (@pedal_gear += 1)
		elsif direction == "down"
			(@pedal_gear == @min_pedal_gear) ? (puts "Pedal gear is already minimized") : @pedal_gear -=1
		end
		@gear_ratio = @pedal_gear.to_f/@wheel_gear.to_f
		puts "You shifted your pedal gear #{direction}. Your gear ratio is now #{@gear_ratio}"
	end

	def shift_wheel(direction)
		if direction == "up"
			(@wheel_gear == @max_wheel_gear) ? (puts "Wheel gear is already maxed") : (@wheel_gear += 1)
		elsif direction == "down"
			(@wheel_gear == @min_wheel_gear) ? (puts "Wheel gear is already minimized") : (@wheel_gear -=1)
		end
		@gear_ratio = @pedal_gear.to_f/@wheel_gear.to_f
		puts "You shifted your wheel gear #{direction}. Your gear ratio is now #{@gear_ratio}"
	end

	def peddle(rotations)
		@units_travelled = @units_travelled + rotations * @gear_ratio.to_f
		puts "You've travelled #{rotations*@gear_ratio} in #{rotations} rotations."
		puts "This bike has travelled a total of #{@units_travelled} so far."
	end
end

becane = Bike.new(10,1,4,1)
becane.shift_pedal("up")
becane.peddle(4)
becane.peddle(10)