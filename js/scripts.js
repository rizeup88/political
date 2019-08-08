$(document).ready(function() {
  $('form#questions').submit(function(event) {
	var previousSelect = $('select#previous').val();
	var healthcareSelect = $('select#healthcare').val();
	var ethnicitiesSelect = $('select#ethnicities').val();
	var marriageSelect = $('select#marriage')
	var powerSelect = $('select#power').val();

	if (previousSelect) {
      var affiliation = previousSelect;
      if (healthcareSelect === 'no' && previousSelect === 'trump' && ethnicitiesSelect === 'disallow' && marriageSelect === ('sop'||'op') && powerSelect === 'less') {
        affiliation = ('Republican');
      } else if (healthcareSelect === 'yes' && previousSelect === 'clinton' && ethnicitiesSelect === 'allow' && marriageSelect === ('sf'||'fa') && powerSelect === 'more') {
        affiliation = ('Democrat');
      } else if (healthcareSelect === 'yes' && previousSelect === 'johnson' && ethnicitiesSelect === 'allow' && marriageSelect === ('sf'||'fa') && powerSelect === 'less') {
        affiliation = ('Libertarian');
      }

      $("#result").empty().append(affiliation);
      $("#affiliation").show();
  	} else {
      alert('Please finish entering your info.');
  	}

  	event.preventDefault();
  });
});