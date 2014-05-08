/**
 * Expose `Adapter`
 */

module.exports = Adapter;

/**
 * Initialize `Adapter`
 *
 * @param {Model} model
 */

function Adapter(model){
 if (!(this instanceof Adapter)) return new Adapter(model);
  this.model = model;
}

/**
 * Subscribe to changes for the given property. 
 * When the property changes, fn should be called.
 *
 * @param {String} prop
 * @param {Function} fn
 *
 * @api public
 */

Adapter.prototype.subscribe = function(prop, fn){
  this.model.on('change ' + prop, fn);
};

/**
 * Unsubscribe from changes for the given property. 
 * The `fn` should no longer be called on property changes for `prop`.
 *
 * @param {String} prop
 * @param {Function} fn
 * @api public
 */

Adapter.prototype.unsubscribe = function(prop, fn){
  this.model.off('change ' + prop, fn);
};

/**
 * Unsubscribe all property change events.
 * Used when a reactive instance is being torn down.
 */

Adapter.prototype.unsubscribeAll = function(){
  this.model.off();
};


/**
 * Set the property `prop` to the given value `val`.
 *
 * @param {String} prop
 * @param {Mixed} value
 * 
 */


Adapter.prototype.set = function(prop, value){
  if(this.model[prop]){
    this.model[prop](value);
  }
};

/*
 * Get the value for property prop
 *
 * @param {String} prop
 */

Adapter.prototype.get = function(prop){
  return (this.model[prop] ? this.model[prop]() : null);
};
