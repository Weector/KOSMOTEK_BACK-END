const { setTimeout } = require("timers");
const { updateProductDBCollection } = require("./updateProductDBCollection");
const { updateCategoryDBCollection } = require("./updateCategoryDBCollection");
const { updateBrandDBCollection } = require("./updateBrandDBCollection");

// Daily collection updates
const schedulerUpdates = async () => {
  try {
    await updateProductDBCollection();
    await updateCategoryDBCollection();
    await updateBrandDBCollection();

    console.log("Successfully database updated");
  } catch (error) {
    console.error("Error calling update database function", error);
  } finally {
    // Starting a new setTimeout for the next call after 24 hours
    const intervalInMilliseconds = 24 * 60 * 60 * 1000;
    setTimeout(schedulerUpdates, intervalInMilliseconds);
  }
};

module.exports = { schedulerUpdates };
