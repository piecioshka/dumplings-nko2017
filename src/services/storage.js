class StorageService {

  strategy = null;

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  create(key, value) {
    this.strategy.setItem(key, JSON.stringify(value));
  }

  read(key) {
    const value = this.strategy.getItem(key);

    try {
      return JSON.parse(value);
    } catch (err) {
      console.warn(err);
    }

    return value;
  }

  update(...args) {
    return this.create(...args);
  }

  remove(key) {
    this.strategy.removeItem(key);
  }
}

export default (function () {
  const service = new StorageService();
  service.setStrategy(window.localStorage);

  return {
    get: service.read.bind(service),
    save: service.create.bind(service),
    remove: service.remove.bind(service)
  }
})();
