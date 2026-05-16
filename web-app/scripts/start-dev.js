// small launcher: spawns the local "vite" process so nodemon can restart it cleanly
const { spawn } = require("child_process");

const isWin = process.platform === "win32";
const cmd = isWin ? "npx.cmd" : "npx";
const args = ["vite", "--host", "0.0.0.0", "--port", "5173"];

const child = spawn(cmd, args, { stdio: "inherit" });

child.on("exit", (code) => {
  // propagate exit so nodemon stops too if vite exits
  process.exit(code);
});

// forward signals so child can shut down cleanly
["SIGINT","SIGTERM"].forEach(sig=>{
  process.on(sig, ()=> {
    try { child.kill(sig); } catch {}
    process.exit();
  });
});