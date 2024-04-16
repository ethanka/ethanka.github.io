function displayCatInfo(catString) {
    let cats = JSON.parse(catString);
    let motherNames = cats.map(cat => cat.name);
    let total = 0;
    let male = 0;
    let female = 0;
  
    // Create a formatted string of mother cat names.
    if (motherNames.length > 1) {
      motherInfo += motherNames.slice(0, -1).join(', ') + ', and ' + motherNames.slice(-1) + '.';
    } else {
      motherInfo += motherNames[0] + '.';
    }
  
    // Count the total number of kittens and their genders.
    cats.forEach(cat => {
      total += cat.kittens.length;
      cat.kittens.forEach(kitten => {
        if (kitten.gender === 'm') {
          male++;
        } else {
          female++;
        }
      });
    });
  
    kittenInfo = `There are a total of ${total} kittens, ${male} male and ${female} female.`;
  
    // Don't edit the code below here!
    para1.textContent = motherInfo;
    para2.textContent = kittenInfo;
  }
  