import { observe, unobserve } from "@nx-js/observer-util";

export const observer = (klass) => {
    let kp = klass.prototype, 
        cwm = kp.componentDidMount,
        cdu = kp.componentWillUnmount;
    kp.componentDidMount = function() {
        this.render = observe(this.render, { scheduler: () => this.setState({}), lazy: true })
        cwm && cwm.call(this);
    }
    kp.componentWillUnmount = function() {
        unobserve(this.render);
        cdu && cdu.call(this);
    }
    return klass;
}
