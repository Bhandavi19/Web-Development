import React, { useState, useEffect } from 'react';
import Snake from './Snake';
import Food from './Food';
import useInterval from './useInterval';
import './App.css';

// Function to get random food coordinates
const getRandomCoords = () => {
  const min = 1;
  const max = 98;
  const x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  const y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  return [x, y];
};

// Initial game state
const initialState = {
  food: getRandomCoords(),
  speed: 200,
  direction: 'RIGHT',
  snakeDots: [
    [0, 0],
    [2, 0]
  ]
};

function App() {
  const [snakeDots, setSnakeDots] = useState(initialState.snakeDots);
  const [food, setFood] = useState(initialState.food);
  const [direction, setDirection] = useState(initialState.direction);
  const [speed, setSpeed] = useState(initialState.speed);

  // Drunken logic: sometimes changes direction randomly
  const getDrunkenDirection = (current) => {
    const rand = Math.random();
    if (rand < 0.1) { // 10% chance to sway
      if (current === 'UP' || current === 'DOWN') {
        return Math.random() < 0.5 ? 'LEFT' : 'RIGHT';
      } else {
        return Math.random() < 0.5 ? 'UP' : 'DOWN';
      }
    }
    return current;
  };

  // Snake movement
  const moveSnake = () => {
    let dots = [...snakeDots];
    let head = dots[dots.length - 1];

    const drunkDir = getDrunkenDirection(direction);

    let newHead = [...head];
    switch (drunkDir) {
      case 'RIGHT':
        newHead = [head[0] + 2, head[1]];
        break;
      case 'LEFT':
        newHead = [head[0] - 2, head[1]];
        break;
      case 'DOWN':
        newHead = [head[0], head[1] + 2];
        break;
      case 'UP':
        newHead = [head[0], head[1] - 2];
        break;
      default:
        break;
    }

    dots.push(newHead);
    dots.shift();
    setSnakeDots(dots);
  };

  // Keyboard events for direction
  const onKeyDown = (e) => {
    switch (e.keyCode) {
      case 38: setDirection('UP'); break;
      case 40: setDirection('DOWN'); break;
      case 37: setDirection('LEFT'); break;
      case 39: setDirection('RIGHT'); break;
      default: break;
    }
  };

  const checkIfOutOfBorders = () => {
    let head = snakeDots[snakeDots.length - 1];
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
      onGameOver();
    }
  };

  const checkIfCollapsed = () => {
    let snake = [...snakeDots];
    let head = snake[snake.length - 1];
    snake.pop();
    snake.forEach(dot => {
      if (head[0] === dot[0] && head[1] === dot[1]) {
        onGameOver();
      }
    });
  };

  const checkIfEat = () => {
    let head = snakeDots[snakeDots.length - 1];
    if (head[0] === food[0] && head[1] === food[1]) {
      setFood(getRandomCoords());
      enlargeSnake();
      increaseSpeed();
    }
  };

  const enlargeSnake = () => {
    let newSnake = [...snakeDots];
    newSnake.unshift([]);
    setSnakeDots(newSnake);
  };

  const increaseSpeed = () => {
    if (speed > 10) {
      setSpeed(speed - 10);
    }
  };

  const onGameOver = () => {
    alert(`🍻 Game Over! Your drunken snake reached length ${snakeDots.length}`);
    setSnakeDots(initialState.snakeDots);
    setFood(getRandomCoords());
    setDirection('RIGHT');
    setSpeed(200);
  };

  useEffect(() => {
    document.onkeydown = onKeyDown;
  }, []);

  useInterval(() => {
    moveSnake();
    checkIfOutOfBorders();
    checkIfCollapsed();
    checkIfEat();
  }, speed);

  return (
    <div className="game-area">
      <Snake snakeDots={snakeDots} />
      <Food dot={food} />
    </div>
  );
}

export default App;
