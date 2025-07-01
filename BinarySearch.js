class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  #insert(node, value) {
    if (node > value) {
      if (node.left) {
        this.#insert(node.left, value);
      } else {
        node.left = new Node(value);
      }
    } else if (node === value) {
      throw new Error(`이미 해당 ${value}가 존재 합니다`);
    } else {
      if (node.right) {
        this.#insert(node.right, value);
      } else {
        node.right = new Node(value);
      }
    }
  }

  insert(value) {
    if (!this.root) {
      this.root = new Node(value);
    }

    this.#insert(this.root, value);
  }

  #search(node, value) {
    if (node > value) {
      if (!node.left) {
        return null;
      }

      if (node.left.value === value) {
        return node.left;
      }
      return this.#search(node.left, value);
    } else {
      if (!node.right) {
        return null;
      }

      if (node.right.value === value) {
        return node.right;
      }

      return this.#search(node.right, value);
    }
  }

  search(value) {
    if (!this.root) {
      return null;
    }

    if (this.root.value === value) {
      return this.root;
    }
    this.#search(this.root, value);
  }

  #remove(node, value) {
    if (!node) {
      // 제거할 값이 없는 경우
      return false;
    }

    // 지울 값을 찾은 경우
    if (node.value === value) {
      if (!node.left && !node.right) {
        return null;
      } else if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left;
      } else {
        let exchange = node.left;
        while (exchange.right) {
          exchange = exchange.right;
        }

        const temp = node.value;
        node.value = exchange.value;
        exchange.value = temp;

        node.left = this.#remove(node.left, temp);
        return node;
      }
    }
    // 부모 입장
    else {
      if (node.value > value) {
        node.left = this.#remove(node.left, value);
        return node;
      } else {
        node.right = this.#remove(node.right, value);
        return node;
      }
    }
  }

  remove() {
    const node = this.#remove(this.root, value);
    if (node) {
      this.root = node;
    }
  }
}

const bst = new BinarySearchTree();
bst.insert(8);
bst.insert(10);
bst.insert(3);
bst.insert(1);
bst.insert(14);
bst.insert(6);
bst.insert(7);
bst.insert(4);
bst.insert(13);
console.log(bst.search(3));
