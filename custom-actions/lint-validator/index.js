import * as core from '@actions/core';
import * as fs from 'fs';
import { execSync } from 'child_process';

async function run() {
  try {
    // Verifica se o arquivo necessário está presente
    const requiredFile = 'build.config.json';
    if (!fs.existsSync(requiredFile)) {
      core.setFailed(`Required file missing: ${requiredFile}`);
      return;
    }

    console.log('Running linter...');
    execSync('npm run lint', { stdio: 'inherit' });

    console.log('Running SonarQube analysis...');
    execSync(
      'sonar-scanner -Dsonar.projectKey=my_project -Dsonar.organization=my_org -Dsonar.host.url=https://sonarcloud.io -Dsonar.login=${{ secrets.SONAR_TOKEN }}',
      { stdio: 'inherit' }
    );
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();

