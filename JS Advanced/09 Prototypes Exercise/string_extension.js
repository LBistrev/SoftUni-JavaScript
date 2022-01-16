(function() {
    String.prototype.ensureStart = function(str) {
        let toStr = this.toString();
        if (toStr.startswith(str)) {
            return toStr;
        } else {
            return str + toStr;
        }
    }
    String.prototype.ensureEnd = function(str) {
        let toStr = this.toString();
        if (toStr.endsWith(str)) {
            return toStr;
        } else {
            return toStr + str;
        }
    }

    String.prototype.isEmpty = function() {
        return this.length == 0;
    }

    String.prototype.truncate = function(n) {
        const toStr = this.toString();
        if (this.length < n) {
            return this.toString();
        }
        if (this.length < 4) {
            let str = toStr.substr(0, this.length - n);
            str = str + ".".repeat(n);
            return str;
        } else {
            const splitted = toStr.split(" ");
            if (splitted.length == 1) {
                return toStr.substr(0, n - 3) + "...";
            } else {
                let result = "";
                for (let i = 0; i < splitted.length; i++) {
                    if (result.length + splitted[i].length <= n-3) {
                        result += " " + splitted[i];
                    } else {
                        return result.trim() + "...";
                    }
                }
                return result + "...";
            }

        }
    String.format = function(str, ...params) {
        let result = "";
        for (let i = 0; i < params.length; i++) {
            
        }
    }
    }
})



let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
str = String.format('The {0} {1} fox',
  'quick', 'brown');
str = String.format('jumps {0} {1}',
  'dog');
