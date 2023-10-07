const goldSeriesLink = document.getElementById('gold-series-link');
const hiddenArsenalLink = document.getElementById('hidden-arsenal-link');
const $goldSeriesView = document.getElementById('gold-series-view');
/* const hiddenArsenalView = document.getElementById('hidden-arsenal-view'); */

goldSeriesLink.addEventListener('click', function (event) {
  event.preventDefault();
  $goldSeriesView.textContent = '';
  renderGoldSeries(GoldSeriesData);
});
hiddenArsenalLink.addEventListener('click', function (event) {
  event.preventDefault();
  $goldSeriesView.textContent = '';
});

const GoldSeriesData = {
  id: 1,
  title: 'Gold Series 2009',
  photos: [
    './images/Gold Series 2009/Begone, Knave!.jpg',
    './images/Gold Series 2009/Bottomless Trap Hole.jpg',
    './images/Gold Series 2009/Caius the Shadow Monarch.jpg',
    './images/Gold Series 2009/Compulsory Evacuation Device.jpg',
    './images/Gold Series 2009/Dark Armed Dragon.jpg',
    './images/Gold Series 2009/Des Volstgalph.jpg',
    './images/Gold Series 2009/Double-Edged Sword Techique.jpg',
    './images/Gold Series 2009/Elemental HERO Captain Gold.jpg',
    './images/Gold Series 2009/Elemental HERO Neos Alius.jpg',
    './images/Gold Series 2009/Exile of the Wicked.jpg',
    './images/Gold Series 2009/Future Fusion.jpg',
    './images/Gold Series 2009/Giant Trunade.jpg',
    './images/Gold Series 2009/Gold Sarcophagus.jpg',
    './images/Gold Series 2009/Granmarg the Rock Monarch.jpg',
    './images/Gold Series 2009/Lekunga.jpg',
    './images/Gold Series 2009/Lord Poison.jpg',
    './images/Gold Series 2009/Mind Control.jpg',
    './images/Gold Series 2009/Mobius the Frost Monarch.jpg',
    './images/Gold Series 2009/Necro Gardna.jpg',
    './images/Gold Series 2009/Phantom Beast Cross-Wing.jpg',
    './images/Gold Series 2009/Phantom Beast Rock-Lizard.jpg',
    './images/Gold Series 2009/Phantom Beast Thunder-Pegasus.jpg',
    './images/Gold Series 2009/Phantom Beast Wild-Horn.jpg',
    './images/Gold Series 2009/Phoenix Wing Wind Blast.jpg',
    './images/Gold Series 2009/Prime Material Dragon.jpg',
    './images/Gold Series 2009/Raiza the Strom Monarch.jpg',
    './images/Gold Series 2009/Return of the Six Samurai.jpg',
    './images/Gold Series 2009/Rigorous Reaver.jpg',
    './images/Gold Series 2009/Royal Firestorm Guards.jpg',
    './images/Gold Series 2009/Sangan.jpg',
    './images/Gold Series 2009/Shiens Castle of Mist.jpg',
    './images/Gold Series 2009/Six Samurai United.jpg',
    './images/Gold Series 2009/Skyscraper.jpg',
    './images/Gold Series 2009/Snipe Hunter.jpg',
    './images/Gold Series 2009/Solemn Judgment.jpg',
    './images/Gold Series 2009/Test Tiger.jpg',
    './images/Gold Series 2009/The Six Samurai - Irou.jpg',
    './images/Gold Series 2009/The Six Samurai - Kamon.jpg',
    './images/Gold Series 2009/The Six Samurai - Nisashi.jpg',
    './images/Gold Series 2009/The Six Samurai - Yariza.jpg',
    './images/Gold Series 2009/The Six Samurai - Zanji.jpg',
    './images/Gold Series 2009/The Six Samurai - Yaichi.jpg',
    './images/Gold Series 2009/Thestalos the Firestorm Monarch.jpg',
    './images/Gold Series 2009/Treeborn Frog.jpg',
    './images/Gold Series 2009/Veil of Darkness.jpg',
    './images/Gold Series 2009/Volcanic Rocket.jpg',
    './images/Gold Series 2009/Volcanic Shell.jpg',
    './images/Gold Series 2009/Warrior Elimination.jpg',
    './images/Gold Series 2009/Zaborg the Thunder Monarch.jpg'
  ]
};

renderGoldSeries(GoldSeriesData);

function renderGoldSeries(goldSeries) {

  const $h1Entry = document.createElement('h1');
  $h1Entry.textContent = goldSeries.title;

  const $titleWrapper = document.createElement('div');
  $titleWrapper.setAttribute('class', 'title-wrapper');

  $titleWrapper.appendChild($h1Entry);

  $goldSeriesView.appendChild($titleWrapper);

  const $goldSeriesList = document.createElement('div');
  $goldSeriesList.className = 'row';
  $goldSeriesList.setAttribute('data-gold-series-id', goldSeries.id);

  if (Array.isArray(goldSeries.photos)) {
    goldSeries.photos.forEach(photoUrl => {
      const $imgDiv = document.createElement('div');
      $imgDiv.className = 'column-full column-one-third';

      const $goldseriesImg = document.createElement('img');
      $goldseriesImg.setAttribute('src', photoUrl);
      $goldseriesImg.setAttribute('alt', goldSeries.title);
      $imgDiv.appendChild($goldseriesImg);
      $goldSeriesList.appendChild($imgDiv);
    });
  }

  $goldSeriesView.appendChild($goldSeriesList);
  return $goldSeriesList;
}
