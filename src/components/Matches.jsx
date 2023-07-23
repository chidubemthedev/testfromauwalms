import { useEffect, useState } from "react";
import Chevronleft from "../icons/ChevronLeft";
import ChevronRight from "../icons/ChevronRight";
import Circle from "../icons/Circle";

const Matches = () => {
  const [matches, setMatches] = useState();
  const [round, setRound] = useState(1);
  const [players, setPlayers] = useState([
    {
      challenged: "challenged",
      challenger: "challenger",
      winner: "winner",
      sets: [
        { challenged: 0, challenger: 0 },
        { challenged: 0, challenger: 0 },
        { challenged: 0, challenger: 0 },
      ],
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/matches.json");
      const data = await res.json();
      setMatches(data);
      setPlayers([
        {
          challenged:
            data[0].challenged.firstname + " " + data[0].challenged.lastname,
          challenger:
            data[0].challenger.firstname + " " + data[0].challenger.lastname,
          winner: data[0].winner.firstname,
          sets: [
            {
              challenged: data[0].setA.challenged,
              challenger: data[0].setA.challenger,
            },
            {
              challenged: data[0].setB.challenged,
              challenger: data[0].setB.challenger,
            },
            {
              challenged: data[0].setC.challenged,
              challenger: data[0].setC.challenger,
            },
          ],
        },
        {
          challenged:
            data[1].challenged.firstname + " " + data[1].challenged.lastname,
          challenger:
            data[1].challenger.firstname + " " + data[1].challenger.lastname,
          winner: data[1].winner.firstname,
          sets: [
            {
              challenged: data[1].setA.challenged,
              challenger: data[1].setA.challenger,
            },
            {
              challenged: data[1].setB.challenged,
              challenger: data[1].setB.challenger,
            },
            {
              challenged: data[1].setC.challenged,
              challenger: data[1].setC.challenger,
            },
          ],
        },
      ]);
    };
    fetchData();
  }, []);

  const handleRoundOne = () => {
    setRound(1);
    setPlayers([
      {
        challenged:
          matches[0].challenged.firstname +
          " " +
          matches[0].challenged.lastname,
        challenger:
          matches[0].challenger.firstname +
          " " +
          matches[0].challenger.lastname,
        winner: matches[0].winner.firstname,
        sets: [
          {
            challenged: matches[0].setA.challenged,
            challenger: matches[0].setA.challenger,
          },
          {
            challenged: matches[0].setB.challenged,
            challenger: matches[0].setB.challenger,
          },
          {
            challenged: matches[0].setC.challenged,
            challenger: matches[0].setC.challenger,
          },
        ],
      },
      {
        challenged:
          matches[1].challenged.firstname +
          " " +
          matches[1].challenged.lastname,
        challenger:
          matches[1].challenger.firstname +
          " " +
          matches[1].challenger.lastname,
        winner: matches[1].winner.firstname,
        sets: [
          {
            challenged: matches[1].setA.challenged,
            challenger: matches[1].setA.challenger,
          },
          {
            challenged: matches[1].setB.challenged,
            challenger: matches[1].setB.challenger,
          },
          {
            challenged: matches[1].setC.challenged,
            challenger: matches[1].setC.challenger,
          },
        ],
      },
    ]);
  };

  const handleRoundTwo = () => {
    setRound(2);
    setPlayers([
      {
        challenged:
          matches[3].challenged.firstname +
          " " +
          matches[3].challenged.lastname,
        challenger:
          matches[3].challenger.firstname +
          " " +
          matches[3].challenger.lastname,
        winner: matches[3].winner.firstname,
        sets: [
          {
            challenged: matches[3].setA.challenged,
            challenger: matches[3].setA.challenger,
          },
          {
            challenged: matches[3].setB.challenged,
            challenger: matches[3].setB.challenger,
          },
          {
            challenged: matches[3].setC.challenged,
            challenger: matches[3].setC.challenger,
          },
        ],
      },
      {
        challenged:
          matches[4].challenged.firstname +
          " " +
          matches[4].challenged.lastname,
        challenger:
          matches[4].challenger.firstname +
          " " +
          matches[4].challenger.lastname,
        winner: matches[4].winner.firstname,
        sets: [
          {
            challenged: matches[4].setA.challenged,
            challenger: matches[4].setA.challenger,
          },
          {
            challenged: matches[4].setB.challenged,
            challenger: matches[4].setB.challenger,
          },
          {
            challenged: matches[4].setC.challenged,
            challenger: matches[4].setC.challenger,
          },
        ],
      },
    ]);
  };

  const handleRoundThree = () => {
    setRound(3);
    setPlayers([
      {
        challenged:
          matches[6].challenged.firstname +
          " " +
          matches[6].challenged.lastname,
        challenger:
          matches[6].challenger.firstname +
          " " +
          matches[6].challenger.lastname,
        winner: matches[6].winner.firstname,
        sets: [
          {
            challenged: matches[6].setA.challenged,
            challenger: matches[6].setA.challenger,
          },
          {
            challenged: matches[6].setB.challenged,
            challenger: matches[6].setB.challenger,
          },
          {
            challenged: matches[6].setC.challenged,
            challenger: matches[6].setC.challenger,
          },
        ],
      },
    ]);
  };

  const incrementRound = () => {
    if (round === 1) {
      handleRoundTwo();
    } else if (round === 2) {
      handleRoundThree();
    }
  };

  const decrementRound = () => {
    if (round === 3) {
      handleRoundTwo();
    } else if (round === 2) {
      handleRoundOne();
    }
  };

  return (
    <div className="bg-white min-h-[500px]">
      <div className="flex justify-between border-b items-center">
        <p className="pl-[20px] mt-[22px] mb-[12px]">Round {round}</p>
        <div className="flex gap-[24px] pr-[20px] h-5 items-center">
          <button onClick={decrementRound} className="px-[7px]">
            <Chevronleft />
          </button>
          <button
            onClick={handleRoundOne}
            className={
              round === 1 ? "px-[7px] bg-primary rounded-[3px]" : "px-[7px]"
            }
          >
            1
          </button>
          <button
            onClick={handleRoundTwo}
            className={
              round === 2 ? "px-[7px] bg-primary rounded-[3px]" : "px-[7px]"
            }
          >
            2
          </button>
          <button
            onClick={handleRoundThree}
            className={
              round === 3 ? "px-[7px] bg-primary rounded-[3px]" : "px-[7px]"
            }
          >
            3
          </button>
          <button onClick={incrementRound} className="px-[7px]">
            <ChevronRight />
          </button>
        </div>
      </div>

      <div className="flex px-[20px] flex-col-reverse md:flex-row">
        <div className="w-[50%] mt-[32px] flex flex-wrap gap-[44px]">
          {players.map((player, index) => (
            <div
              key={index}
              className="min-w-[300px] border-solid border-[1px] rounded-[5px] max-h-fit"
            >
              <div className="flex items-center border-b">
                <span
                  className={
                    player.challenged.includes(player.winner)
                      ? "flex items-center justify-center w-[38px] h-[41px] bg-primary"
                      : "flex items-center justify-center w-[38px] h-[41px] bg-secondary"
                  }
                >
                  1
                </span>
                <p className="pl-[10px] pr-[30px]">{player.challenged}</p>
                <div className=" flex ml-auto">
                  <span className="flex items-center justify-center w-[20px] h-[41px] bg-secondary">
                    {player.sets[0].challenged}
                  </span>
                  <span className="flex items-center justify-center w-[20px] h-[41px] bg-secondary">
                    {player.sets[1].challenged}
                  </span>
                  <span className="flex items-center justify-center w-[20px] h-[41px] bg-secondary">
                    {player.sets[2].challenged}
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                <span
                  className={
                    player.challenger.includes(player.winner)
                      ? "flex items-center justify-center w-[38px] h-[41px] bg-primary"
                      : "flex items-center justify-center w-[38px] h-[41px] bg-secondary"
                  }
                >
                  2
                </span>
                <p className="pl-[10px]">{player.challenger}</p>
                <div className=" flex ml-auto">
                  <span className="flex items-center justify-center w-[20px] h-[41px] bg-secondary">
                    {player.sets[0].challenger}
                  </span>
                  <span className="flex items-center justify-center w-[20px] h-[41px] bg-secondary">
                    {player.sets[1].challenger}
                  </span>
                  <span className="flex items-center justify-center w-[20px] h-[41px] bg-secondary">
                    {player.sets[2].challenger}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[50%] mt-[32px]">
          <ul>
            <div className="flex items-center gap-[12px] mb-[16px]">
              <span>
                <Circle color="#E89D2B" />
              </span>
              <li>Match is Ongoing</li>
            </div>
            <div className="flex items-center gap-[12px] mb-[16px]">
              <span>
                <Circle color="#AFAFAF" />
              </span>
              <li>Loser of the Match</li>
            </div>
            <div className="flex items-center gap-[12px] mb-[16px]">
              <span>
                <Circle color="#82B020" />
              </span>
              <li>Winner of the match</li>
            </div>
          </ul>
        </div>
      </div>

      {round === 1 ? (
        <button
          onClick={handleRoundTwo}
          className=" flex items-center justify-center mx-auto mt-[100px] bg-primary hover:bg-lime-400 shadow-3xl rounded-[16px] w-[40%] min-h-[52px]"
        >
          Proceed to Round 2
        </button>
      ) : null}

      {round === 2 ? (
        <button
          onClick={handleRoundThree}
          className=" flex items-center justify-center mx-auto mt-[100px] bg-primary hover:bg-lime-400 shadow-3xl rounded-[16px] w-[40%] min-h-[52px]"
        >
          Proceed to Round 3
        </button>
      ) : null}
    </div>
  );
};

export default Matches;
