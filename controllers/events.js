// Display list of all events
exports.event_list = function(req, res) {
   // var events = ["Portugal", "Bahrain", "Europe", "Spain" ];
   // res.render('calendar', { title: 'Calendar of Events', data: events });
   var events = [];
   events.push({ name: "Portugal", completed: true });
   events.push({ name: "Bahrain",  completed: false });
   events.push({ name: "Europe",   completed: false });
   res.render('calendar', {title: 'Calendar of Events', data: events });
};