// launcher: spawn Vite using a shell so Windows PATH/args don't cause spawn EINVAL
const { spawn } = require("child_process");
const path = require("path");

const root = path.resolve(__dirname, "..");
const cmd = "npx vite --host 0.0.0.0 --port 5173";

const child = spawn(cmd, {
  stdio: "inherit",
  shell: true,        // use shell to avoid spawn/argument issues on Windows
  cwd: root
});

child.on("exit", (code) => {
  process.exit(code);
});

["SIGINT", "SIGTERM", "SIGHUP"].forEach((sig) => {
  process.on(sig, () => {
    try { child.kill(); } catch {}
    process.exit();
  });
});