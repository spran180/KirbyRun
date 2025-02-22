export const globalGameState: {
    scenes: string[];
    nextScene: string;
    currentScene: string;
    setNextScene: (sceneName: string) => void;
    setCurrentScene: (sceneName: string) => void;
  } = {
    scenes: ["level-1", "level-2", "end"],
    currentScene: "level-1",
    nextScene: "",
    setCurrentScene(sceneName: string) {
      if (this.scenes.includes(sceneName)) {
        this.currentScene = sceneName;
      }
    },
    setNextScene(sceneName: string) {
      if (this.scenes.includes(sceneName)) {
        this.nextScene = sceneName;
      }
    },
  };