import { observe, unobserve } from "@nx-js/observer-util";

export const observer = (klass) => {
    let kp = klass.prototype, 
        cwm = kp.componentWillMount,
        cdu = kp.componentDidUnmount;
    kp.componentWillMount = function() {
        this.render = observe(this.render, { scheduler: () => this.setState({}), lazy: true })
        cwm && cwm.call(this);
    }
    kp.componentDidUnmount = function() {
        unobserve(this.render);
        cdu && cdu.call(this);
    }
    return klass;
}
