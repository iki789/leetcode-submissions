class TrieNode {
    children: Map<string, TrieNode> = new Map()
    endOfWord: boolean = false
}

class PrefixTree {
    public parent: TrieNode
    constructor() { 
        this.parent = new TrieNode()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word: string): void {
        let cur = this.parent
        for (const letter of word) {
            if (!cur.children.has(letter)) {
                cur.children.set(letter, new TrieNode())
            }
            cur = cur.children.get(letter)!
        }
        cur.endOfWord = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {
        let cur = this.parent
        for (let letter of word) {
            if (!cur.children.has(letter)) {
                return false
            }
            cur = cur.children.get(letter)!
        }
        return cur.endOfWord
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix: string): boolean {
        let cur = this.parent
        for (let letter of prefix) {
            if (!cur.children.has(letter)) {
                return false
            }
            cur = cur.children.get(letter)!
        }
        return true
    }
}
