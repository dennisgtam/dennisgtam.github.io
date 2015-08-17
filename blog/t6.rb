class Employee
	def initialize(name, salary)
		@name = name
		@salary = salary
	end

	def introduce
		puts "Hi, my name is #{@name}"
	end
end

class Chef < Employee
	def cook
		puts "I'm cooking"
	end
end

class Server < Employee
	def initialize(num_tables, name, salary)
		@num_tables = num_tables
		super(name, salary)
	end

	def introduce
		super()
		puts "I'll be your server tonight"
	end

	def busy
		puts "I'm serving #{@num_tables} tables"
	end
end

employee = Employee.new("Will",2000)
chef = Chef.new("Adam",2000)
server = Server.new(5, "Clovis",2000)

employee.introduce #=> "Hi, my name is Will.""

chef.introduce #=> "Hi, my name is Adam.""
chef.cook #=> I'm cooking"

server.introduce
server.busy

class CompServer
	def initialize(num_tables, name, salary)
		@num_tables = num_tables
		@employee = Employee.new(name,salary)
	end

	def introduce
		@employee.introduce
		puts "I'll be your server tonight"
	end

	def busy
		puts "I'm serving #{@num_tables} tables"
	end
end

compserver = CompServer.new(6,"Aaron",5000)
compserver.introduce #=> "Hi, my name is Aaron."
#=> "I'll be your server tonight."
compserver.busy #= "I'm serving 6 tables tonight"