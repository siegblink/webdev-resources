import getMustReadList from '../data/mustReadList'
import getDeveloperBlogSites from '../data/developerBlogSites'
import getJavascriptUpdates from '../data/javascriptUpdates'
import getCodingTutorials from '../data/codingTutorials'
import getRProgrammingResources from '../data/rProgrammingResources'
import getMiscellaneousTools from '../data/miscellaneousTools'
import getEverythingReact from '../data/everythingReact'
import getEssentialWebTools from '../data/essentialWebTools'
import getLearnWebDevelopment from '../data/learnWebDevelopment'
import getusefulWebDesignTools from '../data/usefulWebDesignTools'
import getWebScraping from '../data/webScraping'

export default function getFunctionList() {
  return [
    getMustReadList,
    getDeveloperBlogSites,
    getJavascriptUpdates,
    getCodingTutorials,
    getRProgrammingResources,
    getMiscellaneousTools,
    getEverythingReact,
    getEssentialWebTools,
    getLearnWebDevelopment,
    getusefulWebDesignTools,
    getWebScraping,
  ]
}
