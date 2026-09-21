const { execSync } = require('child_process');

// We need the server URL to build the client!
// Assuming the server deployed successfully, we can extract it or hardcode a placeholder
// Wait, the client only uses import.meta.env.VITE_API_URL which is baked into the build.
// I will expect the user to provide it or the previous script to have saved it.

// For now, let's just deploy the frontend with Vercel CLI.
try {
  let envArgs = ` -e VITE_CLOUDINARY_CLOUD_NAME="dp9n0jghj" -b VITE_CLOUDINARY_CLOUD_NAME="dp9n0jghj" -e VITE_CLOUDINARY_UPLOAD_PRESET="skyline" -b VITE_CLOUDINARY_UPLOAD_PRESET="skyline"`;
  
  // Use the correct production backend URL
  let backendUrl = 'https://skyline-haven-server.vercel.app';

  envArgs += ` -e VITE_API_URL="${backendUrl}" -b VITE_API_URL="${backendUrl}"`;

  console.log('Deploying Frontend to Vercel...');
  console.log('Using backend URL:', backendUrl);
  
  const cmd = `cmd /c vercel --prod --yes ${envArgs}`;
  
  const output = execSync(cmd, { encoding: 'utf8', stdio: 'pipe' });
  console.log(output);

} catch (error) {
  console.error('Deployment failed:');
  if (error.stdout) console.log(error.stdout);
  if (error.stderr) console.error(error.stderr);
  console.error(error.message);
}
