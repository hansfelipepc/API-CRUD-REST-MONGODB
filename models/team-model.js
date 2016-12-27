'use strict';
const conn = require('./team-schema');

class TeamModel {
	getAll(cb) {
		conn.find({}, (err, docs) => {
			if(err) throw err;
			cb(docs);
		});
	}

	getOne(_id, cb) {
		conn.findOne({_id : _id}, (err, docs) => {
			if(err) throw err;
			cb(docs);
		});
	}

	save(data, cb) {
		conn.count({_id : data._id}, (err, count) => {
			if(err) throw err;
			console.log(`Número de Docs: ${count}`);

			if(count == 0) {
				conn.create(data, (err) => {
					if(err) throw err;
					cb();
				});
			} else if(count == 1) {
				conn.findOneAndUpdate(
					{_id : data._id},
					{
						name : data.name,
						twitter : data.twitter,
						country : data.country,
						side : data.side
					},
					(err) => {
						if(err) throw(err);
						cb();
					}
				);
			}
		});
	}

	delete(_id, cb) {
		conn.remove({_id : _id}, (err) => {
			if(err) throw err;
			cb();
		});
	}
}

module.exports = TeamModel;