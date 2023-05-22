const { connectToDB } = require('./databaseFromCommandLine.js');
const Prompt = require('../models/promptFromCommandLine');

async function addDateCreated() {
  try {
    await connectToDB();

    const prompts = await Prompt.find({ dateCreated: { $exists: false } });

    prompts.forEach(async (prompt) => {
      prompt.dateCreated = Date.now();
      await prompt.save();
    });

    console.log('Migration completed successfully');
  } catch (error) {
    console.error('Failed to run migration', error);
  }
}

addDateCreated();
