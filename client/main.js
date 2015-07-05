Template.appBody.helpers({
	thisArray: function () {
		console.log(this);
		return [this];
	},
	categories: function () {
		return Categories.find();
	}
});

Template.appBody.events({
	'click .new-category': function () {
		var category = {name: Categories.defaultName(), linkNum: 0};
		category._id = Categories.insert(category);
		console.log('inserting ' + category.name);
	},
	'click .delete-category': function () {
		var currId = this._id
		Categories.remove(currId);
		console.log('deleting ' + this.name + ": " + currId);
		Router.go('home');
	}
});