// import "../../styles/letter.scss";

export default function AlphabetBar({
  moviePerletter,
  setCurrentLetter,
  setPage,
  currentletter,
}) {
  const handleClick = (e) => {
    if (e.target.value !== currentletter) {
      setPage(0);
    }
    setCurrentLetter(e.target.value);
    moviePerletter(e.target.value);
  };

  const renderAlphabet = () => {
    const letters = [];
    for (let i = 0; i < 26; i++) {
      letters.push({
        sign: String.fromCharCode(97 + i).toLocaleUpperCase(),
        id: 97 + i,
      });
    }
    return letters;
  };

  const alphabet = renderAlphabet();

  return (
    <div>
      <div className="alphabet-bar">
        {alphabet.map((letter) => (
          <div key={letter.id} className="letter">
            <input type="button" value={letter.sign} onClick={handleClick} />
          </div>
        ))}
      </div>
    </div>
  );
}
