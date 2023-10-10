const goldSeriesLink = document.getElementById('gold-series-link');
const hiddenArsenalLink = document.getElementById('hidden-arsenal-link');
const $goldSeriesView = document.getElementById('gold-series-view');
const hiddenArsenalView = document.getElementById('hidden-arsenal-view');

goldSeriesLink.addEventListener('click', function (event) {
  event.preventDefault();
  $goldSeriesView.textContent = '';
  renderGoldSeries(GoldSeriesData);
  $goldSeriesView.style.display = 'block';
  hiddenArsenalView.style.display = 'none';
});
hiddenArsenalLink.addEventListener('click', function (event) {
  event.preventDefault();
  $goldSeriesView.textContent = '';
  renderHiddenArsenal(HiddenArsenalData);
  $goldSeriesView.style.display = 'none';
  hiddenArsenalView.style.display = 'block';
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

const HiddenArsenalData = {
  id: 1,
  title: 'Hidden Arsenal 4: Trishulas Triumph',
  photos: [
    './images/Hidden Arsenal 4/Ancient Flamvell Deity.jpg',
    './images/Hidden Arsenal 4/Defender of the Ice Barrier.jpg',
    './images/Hidden Arsenal 4/Dragunity Angusticlavii.jpg',
    './images/Hidden Arsenal 4/Dragunity Brandistock.jpg',
    './images/Hidden Arsenal 4/Dragunity Corsesca.jpg',
    './images/Hidden Arsenal 4/Dragunity Javelin.jpg',
    './images/Hidden Arsenal 4/Dragunity Knight - Barcha.jpg',
    './images/Hidden Arsenal 4/Dragunity Knight - Trident.jpg',
    './images/Hidden Arsenal 4/Dragunity Militum.jpg',
    './images/Hidden Arsenal 4/Dragunity Partisan.jpg',
    './images/Hidden Arsenal 4/Fabled Dianaira.jpg',
    './images/Hidden Arsenal 4/General Gantala of the Ice Barrier.jpg',
    './images/Hidden Arsenal 4/General Raiho of the Ice Barrier.jpg',
    './images/Hidden Arsenal 4/Genex Ally Bellflame.jpg',
    './images/Hidden Arsenal 4/Genex Ally Birdman.jpg',
    './images/Hidden Arsenal 4/Genex Ally Changer.jpg',
    './images/Hidden Arsenal 4/Genex Ally Chemistrer.jpg',
    './images/Hidden Arsenal 4/Genex Ally Crusher.jpg',
    './images/Hidden Arsenal 4/Genex Ally Powercell.jpg',
    './images/Hidden Arsenal 4/Genex Ally Reliever.jpg',
    './images/Hidden Arsenal 4/Genex Ally Remote.jpg',
    './images/Hidden Arsenal 4/Genex Ally Solid.jpg',
    './images/Hidden Arsenal 4/Genex Ally Triforce.jpg',
    './images/Hidden Arsenal 4/Genex Ally Volcannon.jpg',
    './images/Hidden Arsenal 4/Jurrac Aeolo.jpg',
    './images/Hidden Arsenal 4/Jurrac Dino.jpg',
    './images/Hidden Arsenal 4/Jurrac Gallim.jpg',
    './images/Hidden Arsenal 4/Jurrac Herra.jpg',
    './images/Hidden Arsenal 4/Jurrac Meteor.jpg',
    './images/Hidden Arsenal 4/Naturia Butterfly.jpg',
    './images/Hidden Arsenal 4/Naturia Exterio.jpg',
    './images/Hidden Arsenal 4/Naturia Ladybug.jpg',
    './images/Hidden Arsenal 4/Naturia Landoise.jpg',
    './images/Hidden Arsenal 4/Naturia Mantis.jpg',
    './images/Hidden Arsenal 4/Naturia Ragweed.jpg',
    './images/Hidden Arsenal 4/Naturia Stinkbug.jpg',
    './images/Hidden Arsenal 4/Naturia Strawberry.jpg',
    './images/Hidden Arsenal 4/Naturia White Oak.jpg',
    './images/Hidden Arsenal 4/Neo Flamvell Garuda.jpg',
    './images/Hidden Arsenal 4/Neo Flamvell Hedgehog.jpg',
    './images/Hidden Arsenal 4/Neo Flamvell Sabre.jpg',
    './images/Hidden Arsenal 4/Neo Flamvell Origin.jpg',
    './images/Hidden Arsenal 4/Neo Flamvell Shaman.jpg',
    './images/Hidden Arsenal 4/Sacred Spirit of the Ice Barrier.jpg',
    './images/Hidden Arsenal 4/Secret Guards of the Ice Barrier.jpg',
    './images/Hidden Arsenal 4/the Fabled Catsith.jpg',
    './images/Hidden Arsenal 4/the Fabled Cerburrel.jpg',
    './images/Hidden Arsenal 4/the Fabled Chawa.jpg',
    './images/Hidden Arsenal 4/the Fabled Ganashia.jpg',
    './images/Hidden Arsenal 4/the Fabled Kokkator.jpg',
    './images/Hidden Arsenal 4/the Fabled Nozoochee.jpg',
    './images/Hidden Arsenal 4/the Fabled Peggulsus.jpg',
    './images/Hidden Arsenal 4/the Fabled Unicore.jpg',
    './images/Hidden Arsenal 4/Trishula, Dragon of the Ice Barrier.jpg',
    './images/Hidden Arsenal 4/Warlock of the Ice Barrier.jpg'
  ]
};
/* renderHiddenArsenal(HiddenArsenalData); */

function renderHiddenArsenal(hiddenArsenal) {
  const h1Entry = document.createElement('h1');
  h1Entry.textContent = hiddenArsenal.title;

  const titleWrapper = document.createElement('div');
  titleWrapper.setAttribute('class', 'title-wrapper');

  titleWrapper.appendChild(h1Entry);
  hiddenArsenalView.appendChild(titleWrapper);

  const hiddenArsenalList = document.createElement('div');
  hiddenArsenalList.className = 'row';
  hiddenArsenalList.setAttribute('data-hidden-arsenal-id', hiddenArsenal.id);

  if (Array.isArray(hiddenArsenal.photos)) {
    hiddenArsenal.photos.forEach(photoUrl => {
      const imgDiv = document.createElement('div');
      imgDiv.className = 'column-full column-one-third';

      const hiddenArsenalImg = document.createElement('img');
      hiddenArsenalImg.setAttribute('src', photoUrl);
      hiddenArsenalImg.setAttribute('alt', hiddenArsenal.title);
      imgDiv.appendChild(hiddenArsenalImg);
      hiddenArsenalList.appendChild(imgDiv);
    });
  }

  hiddenArsenalView.appendChild(hiddenArsenalList);
}
