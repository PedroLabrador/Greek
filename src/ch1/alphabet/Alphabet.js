import React, { Component } from 'react';
import './Alphabet.css';
import Speaker      from '../../assets/extras/speaker.png';

// alphabet sounds
import soundAlpha   from '../media/sounds/alfabito/alpha.mp3';
import soundBeeta   from '../media/sounds/alfabito/beeta.mp3';
import soundGamma   from '../media/sounds/alfabito/gamma.mp3';
import soundDelta   from '../media/sounds/alfabito/delta.mp3';
import soundEpsilon from '../media/sounds/alfabito/epsilon.mp3';
import soundZeeta   from '../media/sounds/alfabito/zeeta.mp3';
import soundEeta    from '../media/sounds/alfabito/eeta.mp3';
import soundTheta   from '../media/sounds/alfabito/theta.mp3';
import soundIota    from '../media/sounds/alfabito/iota.mp3';
import soundKappa   from '../media/sounds/alfabito/kappa.mp3';
import soundLambda  from '../media/sounds/alfabito/lambda.mp3';
import soundMee     from '../media/sounds/alfabito/mee.mp3';
import soundNee     from '../media/sounds/alfabito/nee.mp3';
import soundKse     from '../media/sounds/alfabito/ksee.mp3';
import soundOmikron from '../media/sounds/alfabito/omikron.mp3';
import soundPee     from '../media/sounds/alfabito/pee.mp3';
import soundRow     from '../media/sounds/alfabito/row.mp3';
import soundSigma   from '../media/sounds/alfabito/sigma.mp3';
import soundTaf     from '../media/sounds/alfabito/taf.mp3';
import soundYpsilon from '../media/sounds/alfabito/ypsilon.mp3';
import soundFee     from '../media/sounds/alfabito/fee.mp3';
import soundChee    from '../media/sounds/alfabito/chee.mp3';
import soundPsee    from '../media/sounds/alfabito/psee.mp3';
import soundOmega   from '../media/sounds/alfabito/omega.mp3';

// alphabet animations
import animsAlpha   from '../media/anims/Anim01.gif';
import animsBeeta   from '../media/anims/Anim02.gif';
import animsGamma   from '../media/anims/Anim03.gif';
import animsDelta   from '../media/anims/Anim04.gif';
import animsEpsilon from '../media/anims/Anim05.gif';
import animsZeeta   from '../media/anims/Anim06.gif';
import animsEeta    from '../media/anims/Anim07.gif';
import animsTheta   from '../media/anims/Anim08.gif';
import animsIota    from '../media/anims/Anim09.gif';
import animsKappa   from '../media/anims/Anim10.gif';
import animsLambda  from '../media/anims/Anim11.gif';
import animsMee     from '../media/anims/Anim12.gif';
import animsNee     from '../media/anims/Anim13.gif';
import animsKse     from '../media/anims/Anim14.gif';
import animsOmikron from '../media/anims/Anim15.gif';
import animsPee     from '../media/anims/Anim16.gif';
import animsRow     from '../media/anims/Anim17.gif';
import animsSigma   from '../media/anims/Anim18.gif';
import animsTaf     from '../media/anims/Anim19.gif';
import animsYpsilon from '../media/anims/Anim20.gif';
import animsFee     from '../media/anims/Anim21.gif';
import animsChee    from '../media/anims/Anim22.gif';
import animsPsee    from '../media/anims/Anim23.gif';
import animsOmega   from '../media/anims/Anim24.gif';

// alphabet words
import wordAlpha   from '../media/sounds/alphabet/alpha.mp3';
import wordBeeta   from '../media/sounds/alphabet/beeta.mp3';
import wordGamma   from '../media/sounds/alphabet/gamma.mp3';
import wordDelta   from '../media/sounds/alphabet/delta.mp3';
import wordEpsilon from '../media/sounds/alphabet/epsilon.mp3';
import wordZeeta   from '../media/sounds/alphabet/zeeta.mp3';
import wordEeta    from '../media/sounds/alphabet/eeta.mp3';
import wordTheta   from '../media/sounds/alphabet/theta.mp3';
import wordIota    from '../media/sounds/alphabet/iota.mp3';
import wordKappa   from '../media/sounds/alphabet/kappa.mp3';
import wordLambda  from '../media/sounds/alphabet/lambda.mp3';
import wordMee     from '../media/sounds/alphabet/mee.mp3';
import wordNee     from '../media/sounds/alphabet/nee.mp3';
import wordKse     from '../media/sounds/alphabet/ksee.mp3';
import wordOmikron from '../media/sounds/alphabet/omikron.mp3';
import wordPee     from '../media/sounds/alphabet/pee.mp3';
import wordRow     from '../media/sounds/alphabet/row.mp3';
import wordSigma   from '../media/sounds/alphabet/sigma.mp3';
import wordTaf     from '../media/sounds/alphabet/taf.mp3';
import wordYpsilon from '../media/sounds/alphabet/ypsilon.mp3';
import wordFee     from '../media/sounds/alphabet/fee.mp3';
import wordChee    from '../media/sounds/alphabet/chee.mp3';
import wordPsee    from '../media/sounds/alphabet/psee.mp3';
import wordOmega   from '../media/sounds/alphabet/omega.mp3';

class Letter extends Component {
	prepareContent(letter) {
		switch(letter) {
      case 'A': return (
      	<div>
      		<img className="spell" src={animsAlpha} alt={letter} />
    			<p className="content">/a/ as in "after"<br />ανατομία -> anatomía<br />άτομο -> átomo<br />ανθρωπολογία -> anthropolojía</p>
    			<img className="speaker" src={Speaker} alt="PlayMe" onClick={() => this.playWords(wordAlpha)}/>
      	</div>
      );
      case 'B': return (
      	<div>
      		<img className="spell" src={animsBeeta} alt={letter} />
      		<p className="content">/v/ as in "vaze"<br />βιολογία -> biolojía<br />βάζο -> vázo</p>
      		<img className="speaker" src={Speaker} alt="PlayMe" onClick={() => this.playWords(wordBeeta)}/>
      	</div>
      );
      case 'G': return (
      	<div>
      		<img className="spell" src={animsGamma} alt={letter} />
      		<p className="content">/w/ as in "woman"<br />/y/ as in "yes"<br />γραμματική -> γramaticí<br />γεωλογία -> jeolojía</p>
      		<img className="speaker" src={Speaker} alt="PlayMe" onClick={() => this.playWords(wordGamma)}/>
      	</div>
      );
      case 'D': return (
      	<div>
      		<img className="spell" src={animsDelta} alt={letter} />
      		<p className="content">/th/ as in "that"<br />δελφίνι -> δelfíni<br />δράκος -> δrákos</p>
      		<img className="speaker" src={Speaker} alt="PlayMe" onClick={() => this.playWords(wordDelta)}/>
      	</div>
      );
      case 'E': return (
      	<div>
      		<img className="spell" src={animsEpsilon} alt={letter} />
      		<p className="content">/e/ as in "pen"<br />έμβρυο -> émvrio<br />εγωιστής -> eγoistís</p>
      		<img className="speaker" src={Speaker} alt="PlayMe" onClick={() => this.playWords(wordEpsilon)}/>
      	</div>
      );
      case 'Z': return (
      	<div>
      		<img className="spell" src={animsZeeta} alt={letter} />
      		<p className="content">/z/ as in "zoo"<br />ζωδιακός -> zoδiakós<br />ζέβρα -> zévra<br />ζωολογία -> zoolojía</p>
      		<img className="speaker" src={Speaker} alt="PlayMe" onClick={() => this.playWords(wordZeeta)}/>
      	</div>
      );
      case 'H': return (
      	<div>
      		<img className="spell" src={animsEeta} alt={letter} />
      		<p className="content">/i/ as in "pin"<br />ηχώ -> ixó<br />ήρωας -> íroas</p>
      		<img className="speaker" src={Speaker} alt="PlayMe" onClick={() => this.playWords(wordEeta)}/>
      	</div>
      );
      case 'U': return (
      	<div>
      		<img className="spell" src={animsTheta} alt={letter} />
      		<p className="content">/th/ as in "thunder"<br />θέμα -> θéma<br />θεραπεία -> θerapía</p>
      		<img className="speaker" src={Speaker} alt="PlayMe" onClick={() => this.playWords(wordTheta)}/>
      	</div>
      );
      case 'I': return (
      	<div>
      		<img className="spell" src={animsIota} alt={letter} />
      		<p className="content">/i/ as in "pin"<br />ιδέα -> iδéa<br />ιστορία -> istoría</p>
      		<img className="speaker" src={Speaker} alt="PlayMe" onClick={() => this.playWords(wordIota)}/>
      	</div>
      );
      case 'K': return (
      	<div>
      		<img className="spell" src={animsKappa} alt={letter} />
      		<p className="content">/c/ as in "coat"<br />/c/ as in "cage"<br />καθολικός -> kaθolikós<br />κέντρο -> cédro</p>
      		<img className="speaker" src={Speaker} alt="PlayMe" onClick={() => this.playWords(wordKappa)}/>
      	</div>
      );
      case 'L': return (
      	<div>
      		<img className="spell" src={animsLambda} alt={letter} />
      		<p className="content">/l/ as in "lamp"<br />λάμπα -> lámba<br />λιώνω -> lióno</p>
      		<img className="speaker" src={Speaker} alt="PlayMe" onClick={() => this.playWords(wordLambda)}/>
      	</div>
      );
      case 'M': return (
      	<div>
      		<img className="spell" src={animsMee} alt={letter} />
      		<p className="content">/m/ as in "my"<br />Μάρτιος -> mártios<br />μαγεία -> majía</p>
      		<img className="speaker" src={Speaker} alt="PlayMe" onClick={() => this.playWords(wordMee)}/>
      	</div>
      );
      case 'N': return (
      	<div>
      		<img className="spell" src={animsNee} alt={letter} />
      		<p className="content">/n/ as in "no"<br/>/n/ as in "new"<br />νάρκισσος -> nárcisos<br />εννιά -> eñá</p>
      		<img className="speaker" src={Speaker} alt="PlayMe" onClick={() => this.playWords(wordNee)}/>
      	</div>
      );
      case 'J': return (
      	<div>
      		<img className="spell" src={animsKse} alt={letter} />
      		<p className="content">/x/ as in "exciting"<br />ξένος -> ksénos<br />ξενοφοβία -> ksenofovía</p>
      		<img className="speaker" src={Speaker} alt="PlayMe" onClick={() => this.playWords(wordKse)}/>
      	</div>
      );
      case 'O': return (
      	<div>
      		<img className="spell" src={animsOmikron} alt={letter} />
      		<p className="content">/o/ as in "pot"<br />ορθόδοξος -> orθoδoksos<br />ορχήστρα -> orcístra</p>
      		<img className="speaker" src={Speaker} alt="PlayMe" onClick={() => this.playWords(wordOmikron)}/>
      	</div>
      );
      case 'P': return (
      	<div>
      		<img className="spell" src={animsPee} alt={letter} />
      		<p className="content">/p/ as in "pin" (but non-aspirated)<br />παιδίατρος -> peδiátros<br />παιδαγωγός -> peδaγoγós</p>
      		<img className="speaker" src={Speaker} alt="PlayMe" onClick={() => this.playWords(wordPee)}/>
      	</div>
      );
      case 'R': return (
      	<div>
      		<img className="spell" src={animsRow} alt={letter} />
      		<p className="content">/r/ as in "tree"<br />ρήτορας -> rítoras<br />ράδιο -> ráδio</p>
      		<img className="speaker" src={Speaker} alt="PlayMe" onClick={() => this.playWords(wordRow)}/>
      	</div>
      );
      case 'S': return (
      	<div>
      		<img className="spell" src={animsSigma} alt={letter} />
      		<p className="content">/s/ as in "stop"<br />σοφία -> sofía<br />Σεπτέμβριος -> septémvrios</p>
      		<img className="speaker" src={Speaker} alt="PlayMe" onClick={() => this.playWords(wordSigma)}/>
      	</div>
      );
      case 'T': return (
      	<div>
      		<img className="spell" src={animsTaf} alt={letter} />
      		<p className="content">/t/ as in "tea" (but non-aspirated)<br />τύραννος -> tíranos<br />τραύμα -> trávma</p>
      		<img className="speaker" src={Speaker} alt="PlayMe" onClick={() => this.playWords(wordTaf)}/>
      	</div>
      );
      case 'Y': return (
      	<div>
      		<img className="spell" src={animsYpsilon} alt={letter} />
      		<p className="content">/i/ as in "pin"<br />ύμνος -> ímnos<br />υγιεινή -> ijiiní</p>
      		<img className="speaker" src={Speaker} alt="PlayMe" onClick={() => this.playWords(wordYpsilon)}/>
      	</div>
      );
      case 'F': return (
      	<div>
      		<img className="spell" src={animsFee} alt={letter} />
      		<p className="content">/f/ as in "fish"<br />φιλοσοφία -> filosofía<br />φιλολογία -> filolojía</p>
      		<img className="speaker" src={Speaker} alt="PlayMe" onClick={() => this.playWords(wordFee)}/>
      	</div>
      );
      case 'X': return (
      	<div>
      		<img className="spell" src={animsChee} alt={letter} />
      		<p className="content">/h/ as in "her"<br />χάος -> xáos<br />χέρι -> céri</p>
      		<img className="speaker" src={Speaker} alt="PlayMe" onClick={() => this.playWords(wordChee)}/>
      	</div>
      );
      case 'C': return (
      	<div>
      		<img className="spell" src={animsPsee} alt={letter} />
      		<p className="content">/ps/ as in "maps"<br />ψυχίατρος -> psicíatros<br />ψυχολογία -> psixolojía</p>
      		<img className="speaker" src={Speaker} alt="PlayMe" onClick={() => this.playWords(wordPsee)}/>
      	</div>
      );
      case 'V': return (
      	<div>
      		<img className="spell" src={animsOmega} alt={letter} />
      		<p className="content">/o/ as in "pot"<br />ωκεανός -> oceanos<br />ωροσκόπιο -> oroskópio</p>
      		<img className="speaker" src={Speaker} alt="PlayMe" onClick={() => this.playWords(wordOmega)}/>
      	</div>
      );
      default : return "";
    }
	}

	playWords(sound) {
		let audio = new Audio(sound);
		if (audio)
			audio.play();
	}

	render() {
		return (
			<div>
				{this.prepareContent(this.props.letter)}
			</div>
		);
	}
}

class Alphabet extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentLetter: ''
		};
		this.changeLetter = this.changeLetter.bind(this);
		this.playSound = this.playSound.bind(this);
	}

  changeLetter(letter) {
  	this.playSound(letter);
  	this.setState(state => ({
			currentLetter: letter
		}));
  }

  playSound(letter) {
    console.log(letter);
    let audio = this.prepareAudio(letter);
    if (audio)
      audio.play()
  }

  prepareAudio(letter) {
    switch(letter) {
      case 'A': return new Audio(soundAlpha);
      case 'B': return new Audio(soundBeeta);
      case 'G': return new Audio(soundGamma);
      case 'D': return new Audio(soundDelta);
      case 'E': return new Audio(soundEpsilon);
      case 'Z': return new Audio(soundZeeta);
      case 'H': return new Audio(soundEeta);
      case 'U': return new Audio(soundTheta);
      case 'I': return new Audio(soundIota);
      case 'K': return new Audio(soundKappa);
      case 'L': return new Audio(soundLambda);
      case 'M': return new Audio(soundMee);
      case 'N': return new Audio(soundNee);
      case 'J': return new Audio(soundKse);
      case 'O': return new Audio(soundOmikron);
      case 'P': return new Audio(soundPee);
      case 'R': return new Audio(soundRow);
      case 'S': return new Audio(soundSigma);
      case 'T': return new Audio(soundTaf);
      case 'Y': return new Audio(soundYpsilon);
      case 'F': return new Audio(soundFee);
      case 'X': return new Audio(soundChee);
      case 'C': return new Audio(soundPsee);
      case 'V': return new Audio(soundOmega);
      default : return "";
    }
  }

  checkActive(letter) {
  	return (this.state.currentLetter === letter) ? true : false
  }

  render() {
    return (
      <div className="mainAlphabet">
        <table className="tableAlphabet">
          <tbody>
            <tr>
              <td className={this.checkActive('A') ? 'square sActive' : 'square'} onClick={() => this.changeLetter('A')}>Αα</td>
              <td className={this.checkActive('B') ? 'square sActive' : 'square'} onClick={() => this.changeLetter('B')}>Ββ</td>
              <td className={this.checkActive('G') ? 'square sActive' : 'square'} onClick={() => this.changeLetter('G')}>Γγ</td>
              <td className={this.checkActive('D') ? 'square sActive' : 'square'} onClick={() => this.changeLetter('D')}>Δδ</td>
              <td className={this.checkActive('E') ? 'square sActive' : 'square'} onClick={() => this.changeLetter('E')}>Εε</td>
              <td className={this.checkActive('Z') ? 'square sActive' : 'square'} onClick={() => this.changeLetter('Z')}>Ζζ</td>
              <td className={this.checkActive('H') ? 'square sActive' : 'square'} onClick={() => this.changeLetter('H')}>Ηη</td>
              <td className={this.checkActive('U') ? 'square sActive' : 'square'} onClick={() => this.changeLetter('U')}>Θθ</td>
              <td className={this.checkActive('I') ? 'square sActive' : 'square'} onClick={() => this.changeLetter('I')}>Ιι</td>
              <td className={this.checkActive('K') ? 'square sActive' : 'square'} onClick={() => this.changeLetter('K')}>Κκ</td>
              <td className={this.checkActive('L') ? 'square sActive' : 'square'} onClick={() => this.changeLetter('L')}>Λλ</td>
              <td className={this.checkActive('M') ? 'square sActive' : 'square'} onClick={() => this.changeLetter('M')}>Μμ</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className={this.checkActive('N') ? 'square sActive' : 'square'} onClick={() => this.changeLetter('N')}>Νν</td>
              <td className={this.checkActive('J') ? 'square sActive' : 'square'} onClick={() => this.changeLetter('J')}>Ξξ</td>
              <td className={this.checkActive('O') ? 'square sActive' : 'square'} onClick={() => this.changeLetter('O')}>Οο</td>
              <td className={this.checkActive('P') ? 'square sActive' : 'square'} onClick={() => this.changeLetter('P')}>Ππ</td>
              <td className={this.checkActive('R') ? 'square sActive' : 'square'} onClick={() => this.changeLetter('R')}>Ρρ</td>
              <td className={this.checkActive('S') ? 'square sActive' : 'square'} onClick={() => this.changeLetter('S')}>Σσ</td>
              <td className={this.checkActive('T') ? 'square sActive' : 'square'} onClick={() => this.changeLetter('T')}>Ττ</td>
              <td className={this.checkActive('Y') ? 'square sActive' : 'square'} onClick={() => this.changeLetter('Y')}>Υυ</td>
              <td className={this.checkActive('F') ? 'square sActive' : 'square'} onClick={() => this.changeLetter('F')}>Φφ</td>
              <td className={this.checkActive('X') ? 'square sActive' : 'square'} onClick={() => this.changeLetter('X')}>Χχ</td>
              <td className={this.checkActive('C') ? 'square sActive' : 'square'} onClick={() => this.changeLetter('C')}>Ψψ</td>
              <td className={this.checkActive('V') ? 'square sActive' : 'square'} onClick={() => this.changeLetter('V')}>Ωω</td>
            </tr>
          </tbody>
        </table>

        <br />

        <Letter letter={this.state.currentLetter} play={this.playSound}/>
      </div>
    );
  }
}

export default Alphabet;
